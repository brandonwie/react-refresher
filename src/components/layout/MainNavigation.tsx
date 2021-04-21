import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const MainNavigation: React.FC = (): JSX.Element => {
  return (
    <header className='header'>
      <Navbar expand='md' fixed='top' bg='primary' variant='dark'>
        <Navbar.Brand href='/'>React Meetups</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Meetups</Nav.Link>
            <Nav.Link href='/new-meetup'>New Meetup</Nav.Link>
            <Nav.Link href='/favorites'>Favorites</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-light'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default MainNavigation;
