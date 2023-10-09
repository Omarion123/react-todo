import { TodoWrapper } from "./components/TodoWrapper";
// import Nav from "./components/Nav"; // Import the Nav component
import backgroundImg from "./images/background.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="aside-left">
          <img src={backgroundImg} alt="background" />
        </div>
        <div className="aside-right">
          <div className="right-content">
            <h1>
              Make a better <span className="plan">plan</span>
              <br /> for your life
            </h1>
            <p>
              Whoever you are , Whatever you are looking for, we <br /> have the
              perfect place for you
            </p>
            {/* <form className="TodoForm">
              <select className="select-box">
                <option value="daily">Duration</option>
                <option value="daily">daily</option>
                <option value="weekly">weekly</option>
                <option value="monthly">monthly</option>
                <option value="yearly">yearly</option>
              </select>
              <input type="text" placeholder="Task" />
              <button type="submit">Add Task</button>
            </form> */}

            <TodoWrapper />
            {/* <div className="output">{<Nav />}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
