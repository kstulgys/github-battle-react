// import React, { Component } from 'react';
// import styled from 'styled-components'


// class Popular extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     selectedLang: 'All'
  //   }
  // }

  // updateLang = (lang) => {
  //   this.setState({
  //     selectedLang: lang
  //   })
  // }

  // render() {
  //   const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    
//     return (
//       <LangUl>
//         {languages.map(lang => {
//           return (
//             <LangLi
//               style={lang === this.state.selectedLang ? {color: '#d0021b'} : null}
//               onClick={this.updateLang.bind(null, lang)}
//               key={lang}>
//               {lang}
//             </LangLi>
//           )
//         })}
//       </LangUl>
//     );
//   }
// }

// export default Popular;


// const LangUl = styled.ul`
// display: flex;
// justify-content: center;
// padding: 0;
// `;

// const LangLi = styled.li`
// list-style-type: none;
// margin: 10px;
// font-weight: bold;
// cursor: pointer;
// `;