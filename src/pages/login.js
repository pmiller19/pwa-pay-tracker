import React, { useState }  from 'react'

import './main-css/main.css'

// class LoginPage extends Component {
//   constructor () {
//     super();
//     this.onNext = this.onNext.bind(this);

//     this.state = {
//       history: {}
//     }
//   }

//   onNext(e) {
//     e.preventDefault();
//     var code = this.code;
//     console.log(code);
//   }
//   render () {
//     return (
//       <div className='body'>
//         <div className='main-section'>
//           <h1>Please Enter Your Frat's Code</h1>
//           <input type='number' className='search' placeholder='Code...' ref={(c) => this.code = c} />
//         </div>
//         <button className='primary-button' onClick={this.onNext}>Next</button>
//       </div>
//     )
//   }
// }

// export default LoginPage


import { Link } from 'react-router-dom';

function LoginPage() {
    const [password, setPassword] = useState('');
    let [click, setClick] = useState(false);

    if (password === '6969' && click === true) {
        return (
            <div className="mt-4 px-4">
                <div className="max-h-screen mb-8">
                    <div className="flex">
                        <div className="w-full mr-2">
                            <h1 className="font-medium">History</h1>
                        </div>
                    </div>
                    <h1 className="font-medium pt-6">Quick Record</h1>
                </div>
                <Link to="/manage" className="font-bold text-right text-blue-600"><h1>Add More Players</h1></Link>
            </div>
        );
    } else if (password !== '6969' && click === true) {
      setClick(false);
    } else {
        return (
          <div className='body'>
            <div className='main-section'>
              <h1>Please Enter Your Frat's Code</h1>
              <input
                className="search"
                placeholder="Code..."
                type="number"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button className='primary-button' onClick={e => setClick(true)}>Next</button>
          </div>
        )
    }
          
}
export default LoginPage;