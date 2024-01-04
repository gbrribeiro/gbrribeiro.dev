#Get the SDK IMAGE
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app 
#Copy the csproj and restore dependencies via NUGET
COPY *.csproj ./
RUN dotnet restore	

#Copy the rest of the files to the container
COPY . ./
#Compile the project to a file out
RUN dotnet publish -c Release -o /out


#Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
EXPOSE 80
#Gets all from the result of the build-env (/app/out) and put it all in the current directory (/app)
COPY --from=build-env /out  ./
ENTRYPOINT ["dotnet", "thilha-net-azure-desafio.dll"]