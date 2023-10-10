import { db } from "../db.js";


export const getProducts =(req,res)=> {
    const q = "SELECT * FROM products"
    db.query(q,(err,data)=>{
        if(data==0) return res.json("None Product")
        return res.status(200).json(data)
    })
};

export const getProductByName = (req,res)=>{
    const q = "SELECT * From products where name = ?";
    const value = [req.body.name];
    db.query(q,value,(err,data)=>{
        if(data==0) return res.json("None Product");
        return res.status(200).json(data)
    })
};

export const deleteProduct = (req,res)=>{
    const productId = req.params.id;
    const q = "DELETE FROM products WHERE `id` = ?";

    db.query(q, [productId], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Product has been deleted!");
    });
};

export const updateProduct = (req,res)=>{
    const productId = req.params.id;
    const key = Object.keys(req.body)[0]; // 获取请求体的第一个键
    
    // 构建 SQL 更新语句
    const q = "UPDATE products SET ?? = ? WHERE id = ?";
    
    // 执行 SQL 查询
    db.query(q, [key, req.body[key], productId], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(403).json("wrong");
      }
      return res.json("updated");
    });

}

export const addProduct = (req,res)=>{
    const q = "INSERT INTO products(`name`, `desc`, `company`, `district`, `number`,`price`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.desc,
        req.body.company,
        req.body.district,
        req.body.number,
        req.body.price
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500)
        return res.status(200).json("Created")
    })
}

export const getProductById= (req,res)=>{
    const q = "SELECT * From products where id = ?";
    const value = [req.params.id];
    db.query(q,value,(err,data)=>{
        if(data==0) return res.json("None Product");
        return res.status(200).json(data)
    })
};