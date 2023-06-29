import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tela Principal</Text>
        <Button
          title="Sobre (Quem somos)"
          onPress={() => navigation.navigate('Sobre')}
          color="#ff8c00"
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Desenvolvimento de Sistemas"
          onPress={() => navigation.navigate('Desenvolvimento')}
          color="#ff8c00"
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Administração"
          onPress={() => navigation.navigate('Administração')}
          color="#ff8c00"
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Contato"
          onPress={() => navigation.navigate('Contato')}
          color="#ff8c00"
        />
      </View>
    );
  }
}

class SobreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sobre</Text>
        <Text style={styles.text}>
          A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC "Adolpho Berezin" de Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura Municipal de Itanhaém.
        </Text>
      </View>
    );
  }
}

class DesenvolvimentoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Desenvolvimento de Sistemas</Text>
        <Text style={styles.text}>
          O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.
        </Text>
      </View>
    );
  }
}

class AdministracaoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Administração</Text>
        <Text style={styles.text}>
          O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controle e auxilia nos processos de direção, utilizando ferramentas da informática. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.
        </Text>
      </View>
    );
  }
}

class ContatoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contato</Text>
        <Text style={styles.text}>
          Entre em contato através do telefone (13) 3426-4926 ou pelo email e158dir@cps.sp.gov.br
        </Text>
      </View>
    );
  }
}

class ProjetosScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Projetos</Text>
        <Text style={styles.text}>
          Conheça nossos projetos e atividades desenvolvidos pelos alunos da ETEC de Itanhaém.
        </Text>
      </View>
    );
  }
}

class EventosScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Eventos</Text>
        <Text style={styles.text}>
          Fique por dentro dos eventos e palestras realizados na ETEC de Itanhaém.
        </Text>
      </View>
    );
  }
}

class CopyrightScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Direitos Autorais</Text>
        <Text style={styles.text}>
          © 2023 ETEC de Itanhaém. Todos os direitos reservados.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ff8c00',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginHorizontal: 20,
  },
  buttonSpacing: {
    marginBottom: 10,
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Tela Principal',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    Sobre: {
      screen: SobreScreen,
      navigationOptions: {
        title: 'Sobre',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    Desenvolvimento: {
      screen: DesenvolvimentoScreen,
      navigationOptions: {
        title: 'Desenvolvimento de Sistemas',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    Administração: {
      screen: AdministracaoScreen,
      navigationOptions: {
        title: 'Administração',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    Contato: {
      screen: ContatoScreen,
      navigationOptions: {
        title: 'Contato',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    Projetos: {
      screen: ProjetosScreen,
      navigationOptions: {
        title: 'Projetos',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    Eventos: {
      screen: EventosScreen,
      navigationOptions: {
        title: 'Eventos',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    DireitosAutorais: {
      screen: CopyrightScreen,
      navigationOptions: {
        title: 'Direitos Autorais',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);