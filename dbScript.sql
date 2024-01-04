IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [AcceptableCodes] (
    [Id] nvarchar(450) NOT NULL,
    [Code] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_AcceptableCodes] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Messages] (
    [Id] nvarchar(450) NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Content] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Messages] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Projects] (
    [Id] nvarchar(450) NOT NULL,
    [Code] nvarchar(max) NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [ImageUrl] nvarchar(max) NOT NULL,
    [GitHubUrl] nvarchar(max) NOT NULL,
    [Url] nvarchar(max) NULL,
    CONSTRAINT [PK_Projects] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240103175319_Initial', N'6.0.25');
GO

COMMIT;
GO

