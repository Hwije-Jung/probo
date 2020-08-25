checkpw(e){
    e.preventDefault();
    var pattern1 = /[0-9]/;    //숫자
    var pattern2 = /[a-zA-Z]/;//영어
    var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;//특수문자

    if(!pattern1.test(this.state.pw) || !pattern2.test(this.state.pw) || !pattern3.test(this.state.pw) || this.state.pw.length < 8)
    {
        toast("비밀번호 형식은 8자리 이상 특수문자 영문자 숫자로 구성되어야합니다!")
        this.setState({
            checking:false
        })
    }
    else{
        if(this.state.pw==='')
        {
            toast.error(<div><Error/><div className="toast"><p>비밀번호를 입력하세요.</p></div></div>);
            this.setState({
                checking:false
            })
        }
        else if(this.state.pw===this.state.pw2)
        {
            toast.success(<div><Check/><div className="toast"><p>비밀번호가 일치합니다.</p></div></div>);
            this.setState({
            pwinput:false,
            pwcheck:this.state.pw,
            checking:true
        })
        }else{
            toast.error(<div><Error/><div className="toast"><p>비밀번호가 일치하지않습니다.</p></div></div>);
            this.setState({
                pwdiv: '비밀번호가 일치하지않습니다.',
                checking:false
            })
        }
    }
   
};

onSubmit(e){
    e.preventDefault();
    const post = {
        id:this.state.id,
        pw:this.state.pwcheck,
    }
    if(this.state.checking===false){
        toast.error(<div><Error/><div className="toast"><p>비밀번호 확인 하세요.</p></div></div>);
    }
    else{//post전송
        fetch('http://localhost:3001/rename_pw',{
            method : "post",
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(toast.success(<div><Check/><div className="toast"><p>비밀번호가 변경되었습니다.</p></div></div>))
    }   
}


app.post('/rename_pw',function(req,res){
    console.log(req.body);
    var id = req.body.id;
    var pw = req.body.pw;
    connection.query('UPDATE usertable SET user_pw =? WHERE user_id=?', [pw,id], function(err,rows,fields){
        console.log('완료');
    })
})