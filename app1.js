var cl = console.log;

const blogform = document.getElementById("blogform");
const titlecontrol = document.getElementById("title");
const contentcontrol = document.getElementById("content");
const blogcontainer=document.getElementById("blogcontainer")



let blogsarr = [
    {
        title: 'promises(es-6)',
        content: 'promise are introduced in es-6 2015 which are used to handle async functionality of javascript'
    },
    {
        title: 'async-await(es-7)',
        content: 'async-await are introduced in es-7 2015 which are used to handle async functionality of javascript'
    },
];



const snackBar = (msg, icon) => {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 3000,
    });
};



const onblogadd=(eve)=>{
    eve.preventDefault();

    let blogobj={
        title:titlecontrol.value,
        content:contentcontrol.value,
    }
    cl(blogobj);
    createblog(blogobj)

    .then(res=>{
        cl(res)
         return fethblogs()
    })
    .then(data=>{
        cl(data)
        templating(data)
        snackBar("succesfully created...!!!",'success')
    })
    .catch(err=>{
cl(err)

    })
}


const createblog=(blog)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let err=Math.random()>=0.2?false:true;
            if(!err){
                (blogsarr.push(blog))
                resolve("New Blog created Succesfullyy..!!!!")
            }else{
                snackBar("something went wrong while creating new blog ..",'error')

            }
        },1000)
    })
}

//fetiching datad:--

const fethblogs=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let err=Math.random()>=0.2?false:true;
            if(!err){
                let data=blogsarr;
                resolve(data)
            }else{
                snackBar("something went wrong while fetiching data..",'error')
            }
        },1200)
    })
}


//templating

// templating 

const templating=(arr)=>{
    let result=''
    arr.forEach(blog=>{
        cl(blog)
        result+=`
                 <div class="col-md-4 mb-4" >
                <div class="card">
                    <div class="card-header">
                        <h2 class="m-0">${blog.title}</h2>
                    </div>

                     <div class="card-body">
                       <p class="m-0">${blog.content}</p>
                    </div>

                     <div class="card-footer d-flex justify-content-between">

                        <button class="btn btn-sm btn-outline-primary"> Edit</button>
                        <button class="btn btn-sm btn-outline-danger"> Remove</button>
                    </div>
                </div>
            </div>

        `
    })
    blogcontainer.innerHTML=result
}
// templating(blogsarr)

blogform.addEventListener("submit",onblogadd)