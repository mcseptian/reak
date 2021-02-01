import { 
  // render, screen 
  } from "@testing-library/react"
// import App from "../App"

// test("renders home", () => {
//   render(<App />)
//   const linkElement = screen.getByText(/Home/i)
//   expect(linkElement).toBeInTheDocument()
// })
import reducers from '../store/reducers';

test('reducers', () => {
  let state;
  state = reducers({quote:{loading:true,quote:null}}, {type:'SET_RANDOM_QUOTE',payload:{_id:'oKpokhAy8o17',tags:['famous-quotes'],content:'It is the quality of our work which will please God, not the quantity.',author:'Mahatma Gandhi',length:70}});
  expect(state).toEqual({quote:{loading:false,quote:{_id:'oKpokhAy8o17',tags:['famous-quotes'],content:'It is the quality of our work which will please God, not the quantity.',author:'Mahatma Gandhi',length:70}}});
});
