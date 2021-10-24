import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();
  const localStorageData = JSON.parse(localStorage.getItem('user'));

  const userMail = localStorageData
    ? localStorageData.email : 'Nenhum e-mail cadastrado';

  return (
    <div>
      <Header name="Perfil" />
      <div
        data-testid="profile-email"
      >
        {userMail}
      </div>
      <div>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }

        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }

        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            history.push('/');
            localStorage.clear();
          } }
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
