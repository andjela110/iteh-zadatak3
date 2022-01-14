import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartBooks, setCartBooks] = useState([]);
 
 
  const [books] = useState([
    {
      id: 1,
      img:"https://www.delfi.rs/_img/artikli/2016/04/gordost_i_predrasuda_vv.jpg",
      title: "Gordost i predrasuda",
      author:"Džejn Ostin",
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:"558,90 din",
      amount: 0,
    },
    {
      id: 2,
      img:"https://www.delfi.rs/_img/artikli/2016/04/razum_i_osecajnost_vv.jpg",
      title: "Razum i osećajnost",
      author:"Džejn Ostin",
      description:
        "Roman prati dvije mlade dame u njihov novi dom, skromnu kuću na imanju dalekih rođaka, gdje će doživjeti ljubav, romansu i tugu.",
      
      price:"481,14 din",
      amount: 0,
    },
    {
      id: 3,
      img:"https://www.delfi.rs/_img/artikli/2015/11/ema_vv.jpg",
      title: "Ema",
      author:"Džejn Ostin",
      description:
        "Ema je takođe prilično razmažena, tvrdoglava i samozadovoljna; slepa je za opasnost koju predstavlja petljanje u živote drugih ljudi.",
      price:"481,14 din",
      amount: 0,
    },
    {
      id: 4,
      img:"https://www.delfi.rs/_img/artikli/2015/11/pod_tudjim_uticajem_vv.jpg",
      title: "Pod tuđim uticajem",
      author:"Džejn Ostin",
      description:
        "Pre osam godina En Eliot je podlegla pritisku porodice i odlučila da se ne uda za čoveka kojeg je volela, kapetana Ventvorta. Okolnosti su ga dovele nazad u njen društveni krug.",
      
      price:"566,19 din",  
      amount: 0,
    },
    {
    id: 5,
    img:"https://www.delfi.rs/_img/artikli/2015/11/nortengerska_opatija_vv.jpg",
      title: "Nortengerska opatija",
      author:"Džejn Ostin",
      description:
        "Ketrin Morland je mlada devojka veoma razvijene mašte. Naivnost i ljubav prema uzbudljivim romanima navešće je da pristupi pomodnoj društvenoj sceni u Batu.",
      price:"481,14 din",
      amount: 0,
    },
  ]);
  function refreshCart() {
    let newBooks = books.filter((oneBook) => oneBook.amount > 0);
    setCartBooks (newBooks);
  }
  function addBook(title, id) {
    setCartNum(cartNum + 1);
    books.forEach((book) => {
      if (book.id === id) {
        book.amount++;
      }
    });
    refreshCart();

  }
 

  return (
    
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Books books={books} onAdd={addBook} />}
        />
        <Route path="/korpa" element={<Cart books={cartBooks} />} />
      </Routes>
    </BrowserRouter>
    
    
    
  );
  }

export default App;
