import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import ArticlePage from '../Articles/ArticlePage';
import IdeasForm from '../IdeasForm/IdeasForm';
import './Ideas.css'

const Ideas = (props) => {
    const [Article, setArticle] = useState(false);
   
  return (
    <>
        <div>
            {Article ? <ArticlePage articleAraay={props.articleAraay} setarticleAraay={props.setarticleAraay}/> : <IdeasForm  Article={Article} setArticle={setArticle}/>}
            
        </div>
    </>
  )
}

export default Ideas