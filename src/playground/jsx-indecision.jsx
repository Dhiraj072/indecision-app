console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'My app',
  options: [],
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    console.log('form submitted');
    e.target.elements.option.value = '';
    render();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [1, 2, 3];

const render = () => {
  const template = (
      <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do today?</button>
          <button onClick={onRemoveAll}>Remove all</button>
          <ol>
              {app.options.map(option => <li key={option}>{option}</li>)}
            </ol>
          <form onSubmit={onFormSubmit}>
              <input type="text" name="option" />
              <button>Add option</button>
            </form>
        </div>
  );
  ReactDOM.render(template, appRoot);
};

render();

