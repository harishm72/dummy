import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import Modal from '../../Modal';
import './styles.css';

// const postUrl = `/api/proxy-bpm/process-instances/variables/${
//     "this.props.data.processInstanceId"
//     }?formKey=${"formId"}`

export default ({ show, handleShow }) => {

    const [placeHolder, changePlaceholder] = useState("+ Drag you file here");
    const [file, handleUpload] = useState("");

    const dropEnd = (event) => {
        event.preventDefault()
        if (event.dataTransfer.items) {
            for (let i = 0; i < event.dataTransfer.items.length; i++) {
                if (event.dataTransfer.items[i].kind === 'file') {
                    var file = event.dataTransfer.items[i].getAsFile();
                    changePlaceholder(file.name)
                    handleUpload(file)
                }
            }
        } else {
            for (let i = 0; i < event.dataTransfer.files.length; i++) {
                //console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
            }
        }
        try {
            document.querySelector(".file-drag-drop-container").className = "file-drag-drop-container"
        } catch (error) {
            return
        }
    }
    const dragLeave = event => {
        event.preventDefault()
    }
    const dragEnter = () => {
    }

    const dragOver = event => {
        event.preventDefault()
        try {
            document.querySelector(".file-drag-drop-container").classList.add('dashed')
        } catch (error) {
            // console.log(error)
        }

    }

    const handleFileUpload = (event) => {
        // console.log(event.target.files[0])
        changePlaceholder(event.target.files[0].name)
    }

    return (
        <Modal
            show={show}
            onClose={() => handleShow(!show)}
            title="Upload Document"
            primaryBtn={{ text: "Upload", className: "fancy_btn active", onClick: () => null }}
            secondaryBtn={{ text: "Cancel", className: "fancy_btn", onClick: () => handleShow(!show) }}
        >
            <div className="file-drag-drop-container">
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag and drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </div>
        </Modal>
    )
}

{/* <div
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={dropEnd}
                className="file-drag-drop-container"
            >
                <p>{placeHolder}</p>
            </div>
            <div className="form_up_box">
                <div className="floating-label col-md-6">
                <input className="file-upload-input" type="file" onChange={handleFileUpload} multiple/>
                </div>
                
                <div className="floating-label col-md-6">
                <input className="floating-input" type="text" placeholder=" " />
                <label>File name</label>
                </div>
            </div> */}s