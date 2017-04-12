const Hackit = function (object) {};
const ErrorMessage = function (object) {};
const Pessoa = function (object) {};
const reduxActions = {};

const H1 = Hackit`
  <div class="ui foo bar { valid: $CPF.isValid})">
    <div hide="!$errors">
       $map($errors, $ErrorMessage)
    </div>
    
    <h1 hide="!$loading" class="loading-wrapper"> Carregando ... </h1>
    
    <div hide="$loading"> 
        $map($pessoas, Pessoa)
    </div>
    
    <input 
        initial="$customer.CPF" 
        name="CPF" 
        placeholder="CPF"  
        schema="$cpfSchema"
    />
    
    <butto onClick="$submit"> Enviar </butto>
  </div>
`

H1.data = (data) => {
  return {
    customer: data.customer
  }
};

H1.actions = {
  init: reduxActions.init
};

H1.cpfSchema = (data, regex) => {
  return {
    regEx: regex.CPF,
    required: () =>  data.peopleType.match(/PF/i)
  }
}

H1.componentDidMount = () => {

};
