import 'bootstrap/dist/css/bootstrap.css'
//import logo from './logo.svg';

function App() {
  return (
    <div className="container-fluid">
        {/* textbox area for the result. */}
        <div className="row">
          <div class="col-md-12">
            <input type="text" name="" value="" />
          </div>
        </div>

        {/* buttons area. */}
        <div className="row">
          {/* First row. */}
          <div class="col-md-3">
            <button name=""> 7 </button>
          </div>
          <div class="col-md-3">
            <button name=""> 8 </button>
          </div>
          <div class="col-md-3">
            <button name=""> 9 </button>
          </div>
          <div class="col-md-3">
            <button name=""> % </button>
          </div>

          {/* Second row. */}
          <div class="col-md-3">
            <button name=""> 4 </button>
          </div>
          <div class="col-md-3">
            <button name=""> 5 </button>
          </div>
          <div class="col-md-3">
            <button name=""> 6 </button>
          </div>
          <div class="col-md-3">
            <button type="submit" name="" value="X" />
          </div>

          {/* Third row. */}
          <div class="col-md-3">
            <button name=""> 1 </button>
          </div>
          <div class="col-md-3">
            <button name=""> 2 </button>
          </div>
          <div class="col-md-3">
            <button name=""> 3 </button>
          </div>
          <div class="col-md-3">
            <button name=""> - </button>
          </div>

          {/* Last row. */}
          <div class="col-md-3">
            <button name=""> 0 </button>
          </div>
          <div class="col-md-3">
            <button name=""> . </button>
          </div>
          <div class="col-md-3">
            <button name=""> + </button>
          </div>
          <div class="col-md-3">
            <button name=""> = </button>
          </div>
        </div>
      </div>
  );
}

export default App;
