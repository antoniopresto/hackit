// TODO: pontos positivos react, ember, jquery, angular, rest, graphql
// TODO: convention over configuration
// TODO: super cleanand reusable from traditional HTML
// TODO: reusable code from jQuery ?
// TODO: Apollo like
// TODO: Totalmente transconpilavel para React/React-native
// TODO: Apenas coisas positivas do redux
// TODO: async ajax
// TODO: interpretado e convertido via server com cache
// TODO: patterns (Convention over configuration)

const Hackit = function (object) {};
const ErrorMessage = function (object) {};

const H1 = Hackit`

  <script>
    const $Schema_CPF = {
      regEx: /foo/img,
      required: () =>  data.peopleType.match(/PF/i),
      errorMessages: () => {
        // custom validation messages to extend defaults
      }
    } 
  </script>
  
  
  <script>
    $ajax_FOO_URL = '${API_HOST}/$bar
    
    $ajax_FOO = (prev, next) => {
       $ajax_FOO_URL = lalala;
       return prev[0].bar;
    }
  </script>
  
  
  <div namespace="cliente.foo.$barVar" class="ui foo bar { valid: $CPF.isValid }">
    <div hide="!$errors">
       $map($errors, $ErrorMessage)
    </div>
    
    <h1 hide="!$loading_fooAjax" class="loading-wrapper"> Carregando ... </h1>
    
    <div hide="$loading_fooAjax"> 
        $map($ajax_FOO.pessoas, ${Pessoa})
    </div>
    
    <input 
        initial="$customer.CPF" 
        name="CPF" 
        placeholder="CPF"  
        schema="$cpfSchema"
    />
    
    <button onClick="$submit"> Enviar </button>
  </div>
`
