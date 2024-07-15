

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  let expression = document.getElementById('display').value;
  try {
      expression = expression
          .replace(/sqrt\(/g, 'Math.sqrt(')       
          .replace(/log\(/g, 'Math.log10(')       
          .replace(/exp\(/g, 'Math.exp(')         
          .replace(/sin\(/g, 'Math.sin(degToRad(') 
          .replace(/cos\(/g, 'Math.cos(degToRad(') 
          .replace(/tan\(/g, 'Math.tan(degToRad(') 
          .replace(/asin\(/g, 'Math.asin(')        
          .replace(/acos\(/g, 'Math.acos(')        
          .replace(/atan\(/g, 'Math.atan(')       
          .replace(/log10\(/g, 'Math.log10(')      
          .replace(/\^/g, '**')                     
          .replace(/degToRad\(/g, 'Math.PI/180*')  
          .replace(/radToDeg\(/g, '180/Math.PI*'); 

      let answer = eval(expression);
      document.getElementById('display').value = answer;
  } catch (e) {
      document.getElementById('display').value = 'Error';
  }
}

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
