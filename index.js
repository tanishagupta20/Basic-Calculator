function show(val){
    let ip = document.getElementById("display");
    ip.value += val;
  }
  
  function calculate(){
    let expr = document.getElementById("display").value;
    let res = eval(expr);
    document.getElementById("display").value = res;
  }
  
  function allClear(){
    document.getElementById("display").value = "";
  }
  
  function del(){
    let exp = document.getElementById("display").value;
    let newExp = exp.slice(0, -1);
    document.getElementById("display").value = newExp;
  }