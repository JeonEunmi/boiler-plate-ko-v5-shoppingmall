import React, { useState, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-color-picker/dist/tui-color-picker.css'; 
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

function ToastEdiTor(props) {

    const [Description, setDescription] = useState("")
    const descriptionInput = useRef();
    
    const descriptionHandler = (e) => {
        alert('상세설명 저장 완료');
        setDescription(descriptionInput.current.getInstance().getHtml());
        props.descriptionFunction(descriptionInput.current.getInstance().getHtml()); 
    }

    return (
        <div style={{ width: '700px'}}>
            <div>
            <Editor
                previewStyle="vertical"
                height="300px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                plugins = {[colorSyntax]}
                ref = {descriptionInput}
                />

            <button onClick={descriptionHandler} style={{float : 'right'}}>저장</button>
                
            </div>
        </div>
    )
}

export default ToastEdiTor
