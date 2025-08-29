let age = prompt("Enter your age")
age = Number.parseInt(age)


const canDrive = (age)=>{
    return age>=18?true:false
}
if(canDrive(age)){
    alert("Yes you can drive")
}
else{
    alert("You cannot drive")
}
