const p = (n) => { 
    return new Promise((resolve, reject) => {
        if(n % 2 == 0)
            resolve(n);
        else 
            reject(n);
    })
};
p(2).then(
    res => console.log(res, "is even"),
    err => console.log(err, "is odd")
);