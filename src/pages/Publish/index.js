import {
    Card, Breadcrumb,Form,Button,Radio,
    Input,Upload,Space,Select,
    message} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {  useEffect, useState } from 'react'
import {createArticleApPI, getArticleById} from '@/apis/articles'
// 引入自定义hook函数
import { useChannel } from '@/hooks /useChannels'
 
const Publish = ()=>{
  const { Option } = Select
  // // 频道状态
  // const [channels,setChannels] = useState([])
  // // 发起获取频道请求
  // useEffect(()=>{
  //   const fetchChannels=async ()=>{
  //      const res = await getChannelAPI()
  //      setChannels(res.data.channels)
  //     }
  //     fetchChannels()
  //   } ,[])
  const {channels} =  useChannel()
  // 封面图片状态信息
  const [imageList, setImageList] = useState([])
  // 点击上传图片
const onUploadChange = (info) => {
    setImageList(info.fileList)
    console.log(info)
}
// 封面张数状态
const [imageType,setImageType] = useState(0)
// 点击切换封面张数
const changeCover =(e)=>{
  console.log(e.target.value)
  setImageType(e.target.value)
}
// 对参数操作的hook函数
const [searchParams] = useSearchParams()

// 根据id查找文章详情
//  传过来一个id，就get ‘id’  
 const articleId = searchParams.get('id')
 console.log('id是',articleId)
 const [form] = Form.useForm()

// 回填数据
useEffect(()=>{
const getArticlesDetail = async() =>{
   const res = await getArticleById(articleId)
  //  console.log('gvhghghj',res)
  // 调用实例方法，1.回填数据
  form.setFieldsValue({
    ...res.data,
    type:res.data.cover.type
  })
  // 2.回填封面
  // 图片类型，单张多张无图
  setImageType(res.data.cover.type)
  // 3.回填图片   路径 为{url:url} 并在标签里加入‘fileList’属性
  setImageList(res.data.cover.images.map(url =>{
    return {url}
  }))
  }
 articleId &&  getArticlesDetail()
},[articleId,form])


  // 点击提交按钮
  const onFinish = (formValue)=>{
    console.log(formValue)
    if(imageType !== imageList.length) return message.warning('请匹配封面数量信息')
    const {title,channel_id,content} = formValue
  // 表单数据reqData
    let reqData = {
      title:title,
      content:content,
      cover:{
        type:imageType, //封面模式1或0或3
        images:imageList.map((item) => item.response.data.url) //得到图片路径
      },
      channel_id:channel_id
    }
    createArticleApPI(reqData)
    message.success('发布成功')
    reqData ={}
  }
return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: `${articleId? 'bianji' : '发布' }文章` },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="封面">
  <Form.Item name="type">
    <Radio.Group onChange={changeCover}>
      <Radio value={1}>单图</Radio>
      <Radio value={3}>三图</Radio>
      <Radio value={0}>无图</Radio>
    </Radio.Group>
  </Form.Item>
  {/* 通过imageType值来判断是否显示 */}
  {imageType > 0  &&  <Upload
    name='image'
    listType="picture-card"
    showUploadList
    maxCount={imageType}
    action={'http://geek.itheima.net/v1_0/upload'}
    onChange={onUploadChange}
    fileList={imageList}
  >
    <div style={{ marginTop: 8 }}>
      <PlusOutlined />
    </div>
  </Upload>}
 
</Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channels.map((item)=>{
            return  <Option value={item.id} key={item.id}>{item.name}
                </Option>
              })} 
             
            </Select>
          </Form.Item>
          
          <Form.Item
        label="内容"
        name="content"
        rules={[{ required: true, message: '请输入文章内容' }]}
      >
      {/* 富文本编辑器 */}
        <ReactQuill
          className="publish-quill"
          theme="snow"
          placeholder="请输入文章内容"
        />
      </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit" >
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
)
}
export default Publish