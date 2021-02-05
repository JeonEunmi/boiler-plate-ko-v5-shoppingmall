import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import { PlusOutlined } from '@ant-design/icons';
import Axios from 'axios';

function FileUpload(props) {

    const [Images, setImages] = useState([])

    const dropHandler = (files) => {

        let formData = new FormData();
        
        const config = {
            header : { 'content-type ' : 'multipart/form-data' }
        };
        formData.append("file", files[0]);

        Axios.post('/api/product/image', formData, config)
            .then(response => {
                if(response.data.success){
                    setImages([...Images, response.data.filePath])
                    props.refreshFunction([...Images, response.data.filePath]);
                }else{
                    alert('파일 업로드 실패');
                }
            });
    }
    
    const deleteHandler = (images) => {

        const currentIndex = Images.indexOf(images);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1);

        setImages(newImages);
        props.refreshFunction(newImages);
    }

    return (
        <div style = {{display : 'flex', justifyContent: 'space-between'}}>
                    
            <Dropzone onDrop={dropHandler}>
            {({getRootProps, getInputProps}) => (
                <section>
                <div 
                    style={{ width: 300, height: 240, border : '1px solid lightgray',
                            display : 'flex' , alignItems : 'center', justifyContent : 'center'
                         }}
                    {...getRootProps()}>
                    <input {...getInputProps()} />
                    <PlusOutlined  style = {{ fontSize : '3rem'}} />
                </div>
                </section>
            )}
            </Dropzone>
            <div style = {{ display : 'flex', width : '350px', height : '240px', overflowX : 'scroll' }}>
                {Images.map((images, index) => (
                    <div onClick={() => deleteHandler(images)} key = {index}>
                        <img style = {{ minWidth : '300px', width : '100%', height : '240px'}} 
                            src = {`http://localhost:5000/${images}`}
                            />
                    </div>
                ))}

            </div>
            
        </div>
    )
}

export default FileUpload
