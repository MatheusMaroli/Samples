using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.OData.Builder;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OData.Edm;
using Newtonsoft.Json.Serialization;
using Simple.Exemple.OData.Domain.DataAcess;
using Simple.Exemple.OData.Domain.Entities;

namespace Simple.Exemple.OData
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<EfDbContext>(options => options.UseInMemoryDatabase("OData.Test"));
            services.AddMvc(opt => opt.EnableEndpointRouting = false);
            services.AddOData(); 
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc(options =>
            {
                options.MapODataServiceRoute("ODataRoutes", "api", GetEdmModel());
            });

            app.UseHttpsRedirection();

        //    app.UseRouting();

            app.UseAuthorization();
/*
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });*/
        }

         public static IEdmModel GetEdmModel()
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            
            // Habilita funções OData como $filter, $select e etc..
            builder.EntitySet<Book>(nameof(Book))
                   .EntityType
                   .Filter()
                   .Count()
                   .Expand()
                   .OrderBy()
                   .Page()
                   .Select();
            builder.EntitySet<Collection>(nameof(Collection))
                   .EntityType
                   .Filter()
                   .Count()
                   .Expand()
                   .OrderBy()
                   .Page()
                   .Select();       
            return builder.GetEdmModel();
        }
    }
}
