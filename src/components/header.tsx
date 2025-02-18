interface headerprops {
    totalcats: number
}
const Header: React.FC<headerprops> = ({ totalcats }) => (
    <header className='header__container'>
        <h1 className='header__title header__welcome'>Welcome to React!</h1>
        <h2 className='header__title'>
            There are currently {totalcats} Cats in this Cat App
        </h2>
    </header>
);

export default Header;
