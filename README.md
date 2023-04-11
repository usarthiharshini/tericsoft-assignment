# tericsoft-assignment
BMI Calculation System API

## Instructions

Clone the project

```bash
  git clone https://github.com/usarthiharshini/tericsoft-assignment.git
```

Install dependencies

```bash
  npm install
```
Run

```bash
  npm start
```

## API routes

    |-- /register                    --register user (name,email,password)  POST
    |    
    |-- /login                       --login user    (email,password)       POST
    |    
    |-- /getProfile/:_id             --get profile details                  GET
    |    
    |-- /calculateBMI/:_id           --calculates BMI (height,weight)       POST
    |     
    |-- /getCalculationHistory/:_id  --get calculation history              GET
    |    
    |-- /logout                      --logout user                          GET