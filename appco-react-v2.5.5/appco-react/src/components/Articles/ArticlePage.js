import React,{useEffect, useState} from 'react'
import './ArticlePage.css'
import {Button} from 'react-bootstrap';
import { json } from 'react-router-dom';




const ArticlePage = (props) => {

  const handleGenerateArticle=()=>
  {
    const data1 = document.getElementById('A1');
    console.log(data1.textContent);
    const fileName = "article.json";
    const data = new Blob([JSON.stringify(data1.textContent)], { type: "text/json" });
    const jsonURL = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link)
    
  }
  // const data1 = document.getElementById('A1');
  // console.log('data111111111111111111',data1)
  // const newAraay=[];
  // articleAraay.push(data1);
  
  useEffect(() => {
    const data1 = document.getElementById('A1');
    console.log('dataaaaaaaaaaaaaaaaaaaa',data1);
    // console.log(JSON.stringify())
    props.setarticleAraay([...props.articleAraay,data1]);
    // const newAraay=[];
    // const data2=JSON.stringify(data1);
    // console.log('jsonnnnnnnn',data2);
    // newAraay.push(data1);
    // console.log('newarrayyyyyyyyyy',newAraay)
    // setarticleAraay(newAraay);
    props.articleAraay.push(data1);
    console.log("length of arrayayyy");
    console.log('articlearrayyyyyyyyy',props.articleAraay);
    console.log('articlearray 1',props.articleAraay[0]);
    
  }, []);
  
  return ( 
    
    <div className="container mt-5 " id="A1">
      <h3 className='TitleClass'>Article!</h3>
      <div className='row my-3'>
          <div className='col-lg-12 col-md-12 ArticlecolClass' >    
            <h1>How to Get a Smaller Dollar Loan With Bad Credit</h1>
            <p>Loans for bad credit are growing in popularity because they involve less red tape than 
              bank loan applications and provide more borrowing scope. You can apply for personal loans for bad credit if you meet
               certain borrowing criteria and can afford the loan. You’ll then get access to online loans for bad credit. 
               Still, depending on your credit score and afforda</p>
               <li>Big Buck Loans : Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay </li>
               <li>Low Credit Finance : Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</li>
               <li>Heart Paydays : Best for Personal Loans for Bad Credit Entrepreneurs Generating $1k+ Per Month </li>
               <li>Viva Payday Loans : Best for Emergency Online Loans for Bad Credit Borrowers in a Hurry for Cash </li>
               <li>Green Dollar Loans : Best for Unsecured, No-Collateral Bad Credit Loans Guaranteed Approval Alternatives</li>
            <p className='ArticleTitleClass'>Goggle Snippet</p>
            <p>Loans for bad credit are growing in popularity because they involve less red tape than 
              bank loan applications and provide more borrowing scope. You can apply for personal loans for bad credit if you meet
               certain borrowing criteria and can afford the loan.</p>
            <p className='ArticleTitleClass'>Question And Answer</p>
            <p>Q: Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay</p>
            <p>A: Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</p>
            <p>Q: Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay</p>
            <p>A: Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</p>
            <p>Q: Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay</p>
            <p>A: Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</p>
          </div>
      </div>
      <hr />
      <div className='row'>
          <div className='col-lg-12 col-md-12 ArticlecolClass'>    
            <h1>Pros And Cons Of Small Dollar Loans</h1>
            <p>Loans for bad credit are growing in popularity because they involve less red tape than 
              bank loan applications and provide more borrowing scope. You can apply for personal loans for bad credit if you meet
               certain borrowing criteria and can afford the loan. You’ll then get access to online loans for bad credit. 
               Still, depending on your credit score and afforda</p>
               <li>Big Buck Loans : Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay </li>
               <li>Low Credit Finance : Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</li>
               <li>Heart Paydays : Best for Personal Loans for Bad Credit Entrepreneurs Generating $1k+ Per Month </li>
               <li>Viva Payday Loans : Best for Emergency Online Loans for Bad Credit Borrowers in a Hurry for Cash </li>
               <li>Green Dollar Loans : Best for Unsecured, No-Collateral Bad Credit Loans Guaranteed Approval Alternatives</li>
            <p className='ArticleTitleClass'>Goggle Snippet</p>
            <p>Loans for bad credit are growing in popularity because they involve less red tape than 
              bank loan applications and provide more borrowing scope. You can apply for personal loans for bad credit if you meet
               certain borrowing criteria and can afford the loan.</p>
            <p className='ArticleTitleClass'>Question And Answer</p>
            <p>Q: Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay</p>
            <p>A: Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</p>
            <p>Q: Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay</p>
            <p>A: Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</p>
            <p>Q: Overall Best for Loans for Bad Credit up to $5000 with 3-24 Months to Pay</p>
            <p>A: Best for Bad Credit Loans with APRs Between 5.99% and 35.99%</p>
          </div>
      </div>
      <hr />
      <div className='row mt-4'>
            <Button className="GenClass" onClick={handleGenerateArticle}>Download Article</Button>
        </div>
    </div>
  )
}

export default ArticlePage
// export {articleAraay}