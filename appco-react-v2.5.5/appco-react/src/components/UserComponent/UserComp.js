import React from 'react'
import './UserComp.css'
import bg from '../../Images/app-hero-bg.jpg'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import ConnectWallet from '../ConnectWalletComp/ConnectWallet';
import { useAccount } from 'wagmi';

const UserComp = () => {
  const {address}=useAccount();
  console.log("addreasas",address);
  const cdt=new Date().toLocaleString();
  console.log("timeeeeeeeeeeeeeeeee",cdt)
  return (
    <>
      <div className="hero-section pt-90 background-img" style={{background:"url('assets/img/app-hero-bg.jpg')no-repeat center center / cover",height:'980px',display:'flex',justifyContent:'center'}}>
    
      
      <div className='container formClass'>
        <div className='TableFormHeadingClass'>
        <h1>Welcome</h1>
        <div style={{display:'flex',justifyContent:'center'}}>
        <ConnectWallet/>
        </div>
        <p>Fill All The Details To Update The Data</p>
        </div>
        <div className='TableFormClass mt-5'>
            <Table bordered className='TableClass'>
            
            <tbody>
              <tr>
                <td className='TableTdClass' style={{width:'30%'}}>Id</td>
                <td>2</td>
              </tr>
              <tr>
                <td className='TableTdClass'>Wallet Address</td>
                <td>{address}</td>
              </tr>
              <tr>
                <td className='TableTdClass'>First Name</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className='TableTdClass'>Last Name</td>
                <td>
                <input type="text" />
                </td>
              </tr>
              <tr>
                <td className='TableTdClass'>Phone</td>
                <td>
                <input type="text" />
                </td>
              </tr>
              <tr>
                <td className='TableTdClass'>Email</td>
                <td>
                <input type='email' />
                </td>
              </tr>
              <tr>
                <td className='TableTdClass'>Password</td>
                <td>
                <input type="password" />
                </td>
              </tr>
              <tr>
                <td className='TableTdClass'>Time</td>
                <td>{cdt}</td>
              </tr>
              <tr>
                <td className='TableTdClass'>API Key</td>
                <td>eredcx232rtdrtr454545jkhnjhj</td>
              </tr>
            </tbody>
          </Table>
          <div style={{display:'flex',justifyContent:'center'}}>
          <Button className='TableButtonClass'>Update Detail</Button>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default UserComp