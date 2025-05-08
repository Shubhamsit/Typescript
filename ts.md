### to compile 

tsc index.ts
ts-node index.ts (using ts-node package by directly execute ts)


### one problem is that we cant directly execute ts file we need to first covert ts into js then run js file , we want to directly run ts file

-> solution (download ts-node package )
```
npm i ts-node -g
```
make sure if ```tsconfig.json``` file is there, as missing sometimes error will be thrown , so create tsconfig.json first

 and add module: CommonJS
 
 ### run 
 
```
tsc --init  //(to create tsconfig.json)  
```

but if we want if we have some erroe in ts file and we want that it should not convert into js file then what to  do?

### there will be compiler options in ```tsconfig.json```

check for "noEmitOnError": true, 

```
"noEmitOnError": true,  // make sure make it true
```
by doing this it will throw error also not make js file 


## debugging in Typescript

enable "sourceMap": true, 

### typescript sourceMap generate karta h jo mki debugging ke liye use hota h, in maps ke through jo orignal ts ka code ko browser me aaram se debug kar paayenge , ya code editor ke andar (vs code) bina pure code ko transpile kiye js ke andar

### now after enabling this "sourceMap": true,
### dist folder ke andar js ke sath sath mapping files bhi milengi, jo hame batayegi typescript ka jo each code h use kaise map kiya gaya h js ke andar,aur ye mostly debugging ke kaam aata h






