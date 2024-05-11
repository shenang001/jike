import {
    Card, Breadcrumb,Form,Button,Radio,
    Input,Upload,Space,Select} from 'antd'
  import { PlusOutlined } from '@ant-design/icons'
  import { Link } from 'react-router-dom'
  import './index.scss'
  import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { request } from '@/utils'  
import { useEffect, useState } from 'react'
import {createArticleApPI, getChannelAPI} from '@/apis/articles'

const Publish = ()=>{
  const { Option } = Select
  // 频道状态
  const [channels,setChannels] = useState([])
  // 封面图片状态信息
  const [imageList, setImageList] = useState([])
  // 点击上传图片
const onUploadChange = (info) => {
    setImageList(info.fileList)
    console.log(info)
}
// 点击切换封面张数
const [imageType,setImageType] = useState(0)
const changeCover =(e)=>{
  console.log(e.target.value)
  setImageType(e.target.value)
}
// 发起获取频道请求
  useEffect(()=>{
  const fetchChannels=async ()=>{
     const res = await getChannelAPI()
     setChannels(res.data.channels)
    }
    fetchChannels()
  } ,[])
  // 点击提交按钮
  const onFinish = (formValue)=>{
    console.log(formValue)
    const {title,channel_id,content} = formValue
    const reqData = {
      title:title,
      content:content,
      cover:{
        type:0,
        images:[]
      },
      channel_id:channel_id
    }
    createArticleApPI(reqData)
  }
return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
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
  {imageType > 0  &&  <Upload
    name='image'
    listType="picture-card"
    showUploadList
    action={'http://geek.itheima.net/v1_0/upload'}
    onChange={onUploadChange}
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