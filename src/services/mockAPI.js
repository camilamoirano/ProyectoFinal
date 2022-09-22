const data = [
    {
        id: 1,
        title: "Jarrón Circle",
        price: 5300,
        stock: 10,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/7b/e9/c5/7be9c5e2afee85e6cf32093bec345020.jpg"
    },
    {
        id: 2,
        title: "Tazón Hita",
        price: 2300,
        stock: 10,
        category: "Utilitarios",
        img: "https://i.pinimg.com/564x/a9/b8/d6/a9b8d6edf1c32767e36702a845b5a018.jpg"
    },
    {
        id: 3,
        title: "Bowl Crudo",
        price: 2400,
        stock: 10,
        category: "Utilitarios",
        img: "https://i.pinimg.com/564x/cc/29/8a/cc298acad6c24bfa45dd47f094d39e4f.jpg"
    },
    {
        id: 4,
        title: "Plato Flat",
        price: 1900,
        stock: 10,
        category: "Utilitarios",
        img: "https://images.pexels.com/photos/6270663/pexels-photo-6270663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        title: "Vela Sans",
        price: 1700,
        stock: 10,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/14/32/ba/1432ba3c7896b25a1091da2ba2c7316d.jpg"
    },
    {
        id: 6,
        title: "Maceta Irregular",
        price: 4300,
        stock: 10,
        category: "Plantas",
        img: "https://i.pinimg.com/564x/ac/01/e6/ac01e6018da324f956aba8836aa78a97.jpg"
    }
]

export default function getItems (){
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(data)
        }, 1500)
    }) 
}

export function getSingleItem(idItem) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let itemFind = data.find (item => item.id === idItem)
            if (itemFind)
                resolve (itemFind);
            else 
                reject (new Error ("Item no encontrado"));
        }, 1500);
    });
}
 