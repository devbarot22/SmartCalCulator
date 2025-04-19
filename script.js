const Calculator = (
  function(){
    const history = [];
    const memo = {};


    function saveHistory(operations, result){
      history.push({operations, result});
    }

    return{
      viewHistory:function(){
        this.forEach((entry, i) => 
          console.log(`${i + 1}: ${entry.operation} = ${entry.result}`)
        )
      }.bind(history),

      clearHistory: function(){
        history = [];
        console.log("history cleared");
      },

      add:function(a){
        return function(b){
          const addition = `add-${a}-${b}`;
          if(memo[addition]) return memo[addition];

          const result = a + b;
          saveHistory(`${a} + ${b}`, result);
          memo[addition] = result;
          return result;
        }
      },

      subtraction: function(a, b){
        const subs = `subtraction - ${a}-${b}`;
        if(memo[subs]) return memo[subs];

        const result = a - b;
        saveHistory(`${a} - ${b}`, result);
        memo[subs] = result;
        return result;
      }
    }

  }
)();

export default Calculator;