using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebPWA.Client.Services;
using Microsoft.AspNetCore.Components.Authorization;
using WebPWA.Client.ViewModel;
using WebPWA.Shared;
using Tewr.Blazor.FileReader;
using Blazored.LocalStorage;

namespace WebPWA.Client
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("app");
            builder.Services.AddOptions();
            builder.Services.AddAuthorizationCore();

            //builder.Services.AddTransient(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
            builder.Services.AddScoped<AuthenticationStateProvider, CustomAuthenticationStateProvider>();
            builder.Services.AddHttpClient<UserViewModel>
                ("WebPWAClient", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress));
            builder.Services.AddHttpClient<PropertyViewModel>
                ("WebPWAClient", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress));
            builder.Services.AddTransient(sp => new HttpClient
            {
                BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)
            }).AddBlazoredLocalStorage();
            builder.Services.AddFileReaderService(o => o.UseWasmSharedBuffer = true);
            await builder.Build().RunAsync();
        }
    }
}
