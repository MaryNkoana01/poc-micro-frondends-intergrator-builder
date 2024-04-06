import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import {
  designTokens,
  MTNBrighterSans,
  WorkSans,
  Reset,
  Row,
  Col,
  Container,
} from "@mtnkente/paragon-foundation";
import { StandardButton } from "@mtnkente/paragon-buttons";
import { createFeatureHub } from "@feature-hub/core";
import { loadFederatedModule } from "@feature-hub/module-loader-federation";
import {
  FeatureAppLoader,
  FeatureHubContextProvider,
} from "@feature-hub/react";

const { featureAppManager } = createFeatureHub("test:integrator", {
  moduleLoader: loadFederatedModule,
});

export const App = ({ themeType, themeVarient }) => {
  return (
    <ThemeProvider theme={designTokens(themeType)[themeVarient]}>
      <FeatureHubContextProvider value={{ featureAppManager }}>
        <div
          className="container-fluid"
          style={{ color: "#fff" }}
        >
          <div className="row">
            <div className="col-md-2 sidebar">
              <div
                className="sidebar-sticky"
                style={{ margin: "1rem 0", minHeight: "100vh" }}
              >
                <div className="row mb-3">
                  <div className="col-md-12">MTN LOGO</div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <StandardButton $variant="primary" label="+ Create" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    {/* Fa Navbar */}
                    <FeatureAppLoader
                      featureAppId="fa-menu-app"
                      src="http:mtnplay.com/fa/menu/__feature_hub_feature_app_module_container__.js"
                      moduleType="federated"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div
                className="p-3"
                style={{
                  minHeight: "calc(100vh)",
                  margin: "1rem 0",
                  borderRadius: "1rem",
                  color: "#fff",
                }}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">SEARCH BAR</h5>
                        <FeatureAppLoader
                          featureAppId="fa-search-bar"
                          src="http://127.0.0.1:5503/dist/fa/__feature_hub_feature_app_module_container__.js"
                          moduleType="federated"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">CREATE FEATURE BAR</h5>
                        <FeatureAppLoader
                          featureAppId="fa-card"
                          src="http://127.0.0.1:5502/dist/fa/__feature_hub_feature_app_module_container__.js"
                          moduleType="federated"
                        />
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">RECENTLY ADDED ITEMS</h5>
                        <FeatureAppLoader
                          featureAppId="welcome:feature-app"
                          src="http://127.0.0.1:5504/dist/fa/__feature_hub_feature_app_module_container__.js"
                          moduleType="federated"
                        /> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">SERVICES</h5>
                        {/* <FeatureAppLoader
                          featureAppId="fa-services-list"
                          src="http://127.0.0.1:5500/dist/fa/__feature_hub_feature_app_module_container__.js"
                          moduleType="federated"
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">PROJECTS</h5>
                        {/* <FeatureAppLoader
                          featureAppId="fa-project-report"
                          src="http://127.0.0.1:5500/dist/fa/__feature_hub_feature_app_module_container__.js"
                          moduleType="federated"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeatureHubContextProvider>
    </ThemeProvider>
  );
};
