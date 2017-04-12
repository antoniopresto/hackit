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

  <Schema name="CPF">
    {
      regEx: /foo/img,
      required: () =>  data.peopleType.match(/PF/i),
      errorMessages: () => {
        // custom validation messages to extend defaults
      }
    }
  </Schema>
  
  <Ajax name="fooAjax">
    [   {
            method: 'get',
            url: '${API_HOST}/foo/bar/$instanceId',
            return: body.0.instanceId
        },
        
        [...] return prev  body.bar
    ]
  </Ajax>
  
  s
  <div class="ui foo bar { valid: $CPF.isValid }">
    <div hide="!$errors">
       $map($errors, $ErrorMessage)
    </div>
    
    <h1 hide="!$loading_fooAjax" class="loading-wrapper"> Carregando ... </h1>
    
    <div hide="$loading_fooAjax"> 
        $map($pessoas, ${Pessoa})
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
