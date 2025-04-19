const Calculator = (
  function(){
    const history = [];
    const memo = {};


    function saveHistory(operations, result){
      history.push({operations, result});
    }

    return{
      clearHistory: function(){
        history.length = 0;
        console.log("history cleared");
      },

      viewHistory: function(){
        return this.map((entry, i) => `${i + 1}: ${entry.operations} = ${entry.result}`).join("<br>");
      }.bind(history),

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
      },
    }

  }
)();

export default Calculator;