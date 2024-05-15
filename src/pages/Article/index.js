import { Link, useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio,
         DatePicker, Select,Table, Tag, Space,message,Popconfirm} from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import {useChannel} from '@/hooks /useChannels'
import { useEffect, useState } from 'react'
import { deleteArticlesAPI, getArticleListAPI } from '@/apis/articles'
const { Option } = Select
const { RangePicker } = DatePicker
const Article = () => {
    // 自定义hook函数
 const {channels}= useChannel()
 //   通过枚举展示标签选项
const status = {
    1:<Tag color="warning">待审核</Tag>,
    2:<Tag color="green">审核通过</Tag>
}
// 定义导航
const navigate = useNavigate()
      // 准备列数据
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
    //   1--待审核  2--审核通过
      render: data => status[data] 
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />}
             onClick={()=>navigate(`/publish?id=${data.id}`)}/>
             {/* 气泡按钮 */}
            <Popconfirm
    title="删除文章"
    description="铁子，确认要删除吗？"
    onConfirm={()=>confirm(data)}
    onCancel={cancel}
    okText="我确认"
    cancelText="不删了"
  >
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
             
            />
            </Popconfirm>
          </Space>
        )
      }
    }
  ]
  // 删除确认/取消按钮
  const confirm =async ({id}) => {
    console.log(id);
 await deleteArticlesAPI(id)
  setReqData({
    ...reqData
  })
    message.success('删除成功');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('取消删除');
  };

  //筛选功能 准备参数
  // 筛选工作
  const [reqData, setReqData] = useState({
    status: '',
    channel_id: '',
    begin_pubdate: '',
    end_pubdate: '',
    page: 1,
    per_page: 10
  })
// 获取文章列表
const [list, setList] = useState([])
const [count,setCount] = useState(0)
useEffect(() => {
  async function getList () {
    const res = await getArticleListAPI(reqData)
    // console.log('文章列表',res)
    setList(res.data.results)
    setCount(res.data.total_count)
  }
  getList()
}, [reqData])
// 点击筛选按钮 获取筛选数据
  const onFinish=(formValue)=>{
    console.log(formValue)
    setReqData({
      ...reqData,
      channel_id:formValue.channel_id,
      status:formValue.status,
      begin_pubdate:formValue.date[0].format('YYYY-MM-DD'),
      end_pubdate:formValue.date[1].format('YYYY-MM-DD'),
    })
  }
  // 分页功能
  const onPageChange=(page,pageSize)=>{
    console.log(page,pageSize)
    setReqData({
      ...reqData,
      page,
    })
  }
  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              style={{ width: 120 }}
            >
            {channels.map((item) =>{
            return <Option value={item.id} key={item.id}>
                {item.name}
                </Option>})}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 表格区域 */}
      <Card title={`根据筛选条件共查询到 ${count} 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={list} pagination={{
          total: count,
          pageSize:reqData.per_page,
          onChange: onPageChange
        }} />
      </Card>
    </div>
  )
}

export default Article