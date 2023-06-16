// JSX = JavaScript + XML
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles  from './App.module.css';


import './global.css';



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasbarbosaalves.png",
      name: "Lucas Alves",
      role: "FullStack Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz nos cursos da Alura, praticando JavaScript. O nome do projeto é Jogo-Secreto 🚀'},
      {type: 'link', content: 'https://github.com/lucasbarbosaalves/jogo-numero-secreto'},
    ],
    publishedAt: new Date('2023-05-01 10:05:00'),
  }, 
  {
    id: 2,
      author: {
      avatarUrl: "https://github.com/matheuslanduci.png",
      name: "Matheus Landuci",
      role: "FullStack Developer"
  },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date('2023-05-02 15:05:00'),
},
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}
      </main>
      </div>
    </div>
  )
}


