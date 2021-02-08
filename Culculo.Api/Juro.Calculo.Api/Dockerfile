#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["Juro.Calculo.Api/Juro.Calculo.Api.csproj", "Juro.Calculo.Api/"]
RUN dotnet restore "Juro.Calculo.Api/Juro.Calculo.Api.csproj"
COPY . .
WORKDIR "/src/Juro.Calculo.Api"
RUN dotnet build "Juro.Calculo.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Juro.Calculo.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Juro.Calculo.Api.dll"]