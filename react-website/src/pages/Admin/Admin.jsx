import React from 'react';
import Header from '../../components/header/Header';
import $ from 'jquery';
import uploadimg from "../../assets/images/uploadimage.png"


import './admin.scss'

function Admin(props) {
    const editor = "РЕДАКТОР СТРАНИЦ"
    const page_name = "АКТУАЛЬНОЕ"
    const post_add = "добавьте публикацию"
    const title_post = "Заголовок"
    const text_post = "Текст поста"
    const enter_text = "Введите здесь текст..."
    const upload_photos = "Загрузите фотографии"
    

    function readURL(input) {
        if (input.files && input.files[0]) {
      
          var reader = new FileReader();
      
          reader.onload = function(e) {
            $('.image-upload-wrap').hide();
      
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
      
            $('.image-title').html(input.files[0].name);
          };
      
          reader.readAsDataURL(input.files[0]);
      
        } else {
          removeUpload();
        }
      }
      
      function removeUpload() {
        $('.file-upload-input').replaceWith($('.file-upload-input').clone());
        $('.file-upload-content').hide();
        $('.image-upload-wrap').show();
      }
      $('.image-upload-wrap').bind('dragover', function () {
              $('.image-upload-wrap').addClass('image-dropping');
          });
          $('.image-upload-wrap').bind('dragleave', function () {
              $('.image-upload-wrap').removeClass('image-dropping');
      });

    
    return (


        <>
            <Header />

            <div className='main-admin'>
                <div className='admin-content'>
                    <div className='page-editor'>
                        <p>{editor}</p>
                    </div>
                    <div className='post-editor'>
                        <div className='page-name'>
                            <p>{page_name}</p>
                        </div>
                        <div className='post-adder'>
                            <div className='title-of-page'>
                                <p>{post_add}</p>

                            </div>
                            <div className='title-of-post'>
                                <p>{title_post}</p>
                                <input type="text" placeholder={enter_text} />
                            </div>
                            <div className='title-of-post'>
                                <p>{text_post}</p>
                                <textarea type="text" className='second-input' placeholder={enter_text} ></textarea>
                            </div>
                            <div className='drag-photo'>
                                <p>{upload_photos}</p>
                                <div className="file-upload">

                                <div className="image-upload-wrap">
                                    <input className="file-upload-input" type='file' onChange={readURL} accept="image/*" />
                                    <div className="drag-text">
                                        <img src={uploadimg} alt="" />
                                        <p>Add image</p>
                                        <p className='textt'>Drag and drop a file or select add Image</p>
                                    </div>
                                </div>
                                <div className="file-upload-content">
                                    <img className="file-upload-image" src="#" alt="your image" />
                                    <div className="image-title-wrap">
                                    <button type="button" onClick={removeUpload()} className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default Admin;