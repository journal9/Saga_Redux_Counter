import './App.css';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getCatsFetch } from './store/catSlice';

function App() {
  const {cats,isLoading} = useSelector(state=>state.cats)
  const dispatch =useDispatch()
  console.log(isLoading)

  useEffect(()=>{
    dispatch(getCatsFetch())
  },[dispatch])
  console.log(cats)

  return (
    <div className="App">
      <h1>CATS GALLARY</h1>
      <p>Images of different species of cats. Lots of cats for you.</p>
      <hr/>
      {isLoading?<h4>loading........</h4>:<h4>done</h4>}
      <div className="Gallery">
        {cats.map(cat=>
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img alt={cat.name} src="https://cdn-images.vetstreet.com/94/31/3e5bb30b48b2b415d6a3de4e9f6e/aegean-cat-thinkstock-464962593-645.jpg" width="200" height="200"/>
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament:{cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        )}
      </div>
      {isLoading?<hr/>:<button>VIEW MORE CATS</button>}
    </div>
  );
}

export default App;
