const MyDiv2 = () => {
  const myName = '김나현';
  const myGit = 'https://github.com/nh1531';
  console.log(myName);
  return (
   <div> 
    <p>{myName}</p>
    <p>GitHub : <a href={myGit}>{myGit}</a></p>
   </div>
 
  );
}

export default MyDiv2;
