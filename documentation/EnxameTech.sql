create database EnxameTech;
use EnxameTech;

create table usuario(
	CPF_usuario varchar(11) primary key,
    nome varchar (20) not null,
    sobrenome varchar (30) not null,
    data_nascimento date not null,
    email varchar(30) not null,
    senha char(8) not null,
    genero ENUM('feminino', 'masculino', 'não binário', 'outro', 'prefiro não responder'),
    telefone varchar (11),
    rua varchar (20),
    numero varchar(6),
    bairro varchar(20),
    cidade varchar (20),
    UF char(2),
    CEP int
    );
    
    create table administrador (
        CPF_administrador varchar(11),
		foreign key (CPF_administrador) references usuario(CPF_usuario) 
    );
    
    create table voluntario(
        CPF_voluntario varchar(11),
        foreign key (CPF_voluntario) references usuario(CPF_usuario),
        area_deAfinidade ENUM('front-end', 'back-end', 'lógica de programação', 'banco de dados')
    );
    
    create table aluno (
        CPF_aluno varchar(11),
        grupo_familiar int,
        renda_familiar decimal,
        foreign key (CPF_aluno) references usuario(CPF_usuario)
    );
    
    create table fale_conosco(
		id_contato int primary key auto_increment,
        nome varchar(20) not null,
        sobrenome varchar (30) not null,
        CPF varchar(11),
        email varchar(30) not null,
		telefone varchar (11),
        mensagem text(250)
    );
    
    create table curso(
		id_curso int primary key auto_increment,
        titulo varchar (30),
        nome_empresa varchar(10),
        descricao text(250),
        dataFinal_incricao date
    );
    
    create table curso_favorito(
		CPF_aluno varchar(11),
        id_cursoFavorito int,
        foreign key (CPF_aluno) references aluno(CPF_aluno),
        foreign key (id_cursoFavorito) references curso(id_curso)
    );
    
    create table monitoria (
		id_monitoria int primary key auto_increment,
        CPF_voluntario varchar(11),
        CPF_aluno varchar(11),
        data_monitoria date,
        horario time,
        descricao_duvida text(250)
    );