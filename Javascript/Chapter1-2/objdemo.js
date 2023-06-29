const teacher = {
    id: 1,
    ssn: '12345',
    firstName: "John",
    lastName: "Nt."
}

const point3D = new Object()
point3D.x = 1
point3D.y = 2
point3D.z = 3

console.log(point3D)

const obj = Object.create(Object.prototype)
obj.url = "https://www.amazon.com/48-Laws-Power-Robert-Greene/dp/0140280197/ref=pd_vtp_h_pd_vtp_h_sccl_1/133-9065249-0244068?content-id=amzn1.sym.a5610dee-0db9-4ad9-a7a9-14285a430f83&pd_rd_i=0140280197&psc=1&asin=0140280197&revisionId=&format=4&depth=1"
obj.img = "https://m.media-amazon.com/images/I/51B0MX9E9ZL._SX325_BO1,204,203,200_.jpg"
obj.tmp = "tmp"

delete obj.tmp

let xDim = point3D.x
let xDim2 = point3D['x']
let {x: myX, y,z} = point3D

console.log(myX)

for(const property in point3D){
    console.log(`${property}: ${point3D[property]}`)
}

