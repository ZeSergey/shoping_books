
import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../app.css';


import Menu from './Menu';
import BookCard from './BookCard';
import Filter from '../containers/filter';




class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }
  render() {
    const { books, isReady, } = this.props;
    return (

      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {
            !isReady ? 'Загрузка ...' : books.map(book => (
              <BookCard key={book.title} {...book} />
            ))
          }
        </Card.Group>

      </Container>

    );
  }
}




export default App;
