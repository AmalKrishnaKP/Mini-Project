
        const container = document.querySelector('.input-container')
        
        let contentTxt=''
        let mask=true
        function maskinput(e){
            let input =e.target
            let typechr=input.value[input.value.length-1]
            if(e.inputType==='deleteContentBackward'){
                contentTxt=contentTxt.slice(0,-1)
            }
            else{
                contentTxt+=typechr
            }
            if(mask){
                input.value='•'.repeat(contentTxt.length)
            }
            else{
                input.value=contentTxt
            }
            console.log(contentTxt)
        }
        
            function showHide(e){
                if(e.target.id === 'hide'){
                    // console.log('clicked')
                    e.target.src = 'eye-open.webp'
                    e.target.id = 'show'
                    let input=document.getElementById("password")
                    input.value =contentTxt
    
                }
            else if(e.target.id === 'show'){
                // console.log('clicked')
                e.target.src = 'eye-close.webp'
                e.target.id = 'hide'
                
                let input = document.getElementById("password");
                input.value = "•".repeat(input.value.length);
            }
            
            
        }

