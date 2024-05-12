export const body = document.querySelector("body");
export const modal = document.querySelector(".modal");
import { load } from "../functions.js";



export const deleteModalHTML = ` <div id="deleteModal" class="modalcontainer d-flex flex-column border border-danger rounded col-11 col-md-4 text-center p-5 gap-5 h-50  justify-content-center">
                                    <div class="imageContainer py-3">
                                        <img src="/images/Logo Code Red (3).png" height="70px" alt="Code Red logo">
                                    </div>
                                    <h3 class="text-white">Are you sure you want to delete this post??</h3>
                                    <div class="d-flex justify-content-evenly">
                                        <button id="successBtn" class="btn btn-success">Sure</button>
                                        <button id="declineBtn" class="btn btn-danger">No</button>
                                    </div>
                                    </div>`

export const successModalHTML = ` <div id="successModal" class="modalcontainer d-flex flex-column border border-danger rounded col-11 col-md-4 text-center p-5 gap-5 h-50  justify-content-center">
                                   
                                    <h3 class="text-white">Done!!!</h3>
                                    <div class="imageContainer">
                                        <img src="../images/successIcon.png" width="100px" height="100px">
                                    </div>`
export const errorModalHTML =    `<div id="successModal" class="modalcontainer d-flex flex-column border border-danger rounded col-11 col-md-4 text-center p-5 gap-5 h-50  justify-content-center">
                                   
                                    <h3 class="text-danger">Upps!! Something went wrong, please try again</h3>
                                    <div class="imageContainer">
                                        <img src="../images/errorIcon.png" width="100px" height="100px">
                                    </div>`
export const postformModalHTML = `
                                    <form id="postformModal" class="modalcontainer d-flex flex-column  justify-content-center col-11 col-md-6 col-lg-4 " method="post" >
                                    <div class="d-flex justify-content-end p-2">
                                    <span id="closePostform" class="material-symbols-outlined text-light fs-3 ">cancel</span>
                                    </div>
                                    <div class="feedStarterContainer d-flex  flex-column col my-3   gap-3 p-3 rounded">
                                        <a class="text-decoration-none" href="/profile/index.html"><div class="d-flex align-items-center mb-3  gap-3">
                                            <img id="userPic" src=${load("userImage")} height="50px" width="50px" class="rounded-circle" alt="Profilepicture">
                                            <p id="userName" class="userName text-white m-0 ">${load("name")}</p> 
                                        </div>
                                        </a>
                                        <div id="feedtitle" class="form-outline d-flex">
                                            
                                            <label for="title"></label>
                                            <input type="text" id="title" name="title" class="form-control" placeholder="Title" aria-label="title" aria-describedby="basic-addon1" required autocomplete="">
                                        </div>
                                        <div id="feedbody" class="form-outline d-flex">
                                            <textarea class="form-control " id="body" placeholder="Share your bugs, your projects , your ideas and thoughts... Just write your # in here as well"></textarea>
                                            <label class="form-label" for="body"></label>
                                        </div>
                                        <div id="feedPic" class="form-outline d-flex ">
                                            <span class="input-group-text text-danger bg-transparent border-danger border-end-0 rounded-end-0 " id="basic-addon1"><span class="material-symbols-outlined">
                                                add_photo_alternate
                                                </span></span>
                                            <label for="addPic"></label>
                                            <input type="text" id="addPic" name="addPic" class="form-control rounded-start-0 " placeholder="If you want to add a picture fill in the url here.." aria-label="addPic" aria-describedby="basic-addon1" >
                                        </div>
                                        <div class="row align-self-center mt-3">
                                            <button id="submitPostBtn" type="submit" class="col btn btn-danger">Post</button>
                                        </div>
                                    </div>
                                    </form>`
export const editformModalHTML = `
                                        <form id="postformModal" class="modalcontainer d-flex flex-column  justify-content-center col-11 col-md-4 " method="put" >
                                        
                                        <div class="d-flex justify-content-end p-2">
                                        <span id="closePostform" class="material-symbols-outlined text-light fs-3 ">cancel</span>
                                        </div>
                                        <h3 class="text-white text-center">Edit your post</h3>
                                        <div class="feedStarterContainer d-flex  flex-column col my-3   gap-3 p-3 rounded">
                                            <a class="text-decoration-none" href="/profile/index.html"><div class="d-flex align-items-center mb-3  gap-3">
                                                <img id="userPic" src=${load("userImage")} height="50px" width="50px" class="rounded-circle" alt="Profilepicture">
                                                <p id="userName" class="userName text-white m-0 ">${load("name")}</p> 
                                            </div>
                                            </a>
                                            <div id="feedtitle" class="form-outline d-flex">
                                                
                                                <label for="title"></label>
                                                <input type="text" id="title" name="title" class="form-control"  aria-label="title" aria-describedby="basic-addon1" value="${load("originaltitle")}">
                                            </div>
                                            <div id="feedbody" class="form-outline d-flex">
                                                <textarea class="form-control " id="body">${load("originalbody")}</textarea>
                                                <label class="form-label" for="body"></label>
                                            </div>
                                            <div id="feedPic" class="form-outline d-flex ">
                                                <span class="input-group-text text-danger bg-transparent border-danger border-end-0 rounded-end-0 " id="basic-addon1"><span class="material-symbols-outlined">
                                                    add_photo_alternate
                                                    </span></span>
                                                <label for="addPic"></label>
                                                <input type="text" id="addPic" name="addPic" class="form-control rounded-start-0 "  aria-label="addPic" aria-describedby="basic-addon1" value="${load("originalimage")}">
                                            </div>
                                            <div class="row align-self-center mt-3">
                                                <button id="updatePostBtn" type="submit" class="col btn btn-danger">Post</button>
                                            </div>
                                        </div>
                                        </form>`

export const searchModal = `  <form  class="modalcontainer d-flex flex-column  justify-content-center col-11 col-md-4" >
                                <div id="searchBar" class=" input-group row m-auto  ">
                                <div class="col-11  d-flex m-auto my-4 p-3">
                                   
                                    <label for="search"></label>
                                    <input type="search" id="search" class="form-control rounded-0 rounded-start border-end-0 " placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1">
                                    <div class="input-group-append">
                                    <button id="searchBtn" class="btn d-flex rounded-0 rounded-end border-danger text-white" type="submit"><span  class="material-symbols-outlined ">search</span></a></button>
                                    </div>
                                    <span id="closeIcon" class="material-symbols-outlined text-white">cancel</span>
                                </div>
                                </div>
                                </form>`