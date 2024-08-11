// src/App.js
import React, { useState } from "react";
import HeaderTitle from "./components/HeaderTitle";

function LeadCalculator() {
  // Définir les états pour chaque champ du tableau
  const [panierMoyen, setPanierMoyen] = useState(5000);
  const [coutProduction, setCoutProduction] = useState(3000);
  const [tauxSignature, setTauxSignature] = useState(10);
  const [tauxRDV, setTauxRDV] = useState(20);
  const [cpaCible, setCpaCible] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // Calculs
  const marge = panierMoyen - coutProduction;
  const leadsParVente = (100 / tauxSignature) * (100 / tauxRDV);
  const valeurLead = marge / leadsParVente;

  // Calcul des bénéfices si CPA cible est en dessous du CPA max
  const benefices =
    cpaCible < valeurLead ? (valeurLead - cpaCible) * leadsParVente : 0;

  return (
    <>
      <HeaderTitle />
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Calculateur de Valeur de Lead</h1>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Panier Moyen des Nouveaux Clients (€) :
            <input
              type="number"
              value={panierMoyen}
              onChange={(e) => setPanierMoyen(Number(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Coût de Production des Ventes (€) :
            <input
              type="number"
              value={coutProduction}
              onChange={(e) => setCoutProduction(Number(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Taux de Signature des Nouveaux Clients (%) :
            <input
              type="number"
              value={tauxSignature}
              onChange={(e) => setTauxSignature(Number(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Taux de RDV sur Demandes (%) :
            <input
              type="number"
              value={tauxRDV}
              onChange={(e) => setTauxRDV(Number(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            CPA Cible (€) :
            <input
              type="number"
              value={cpaCible}
              onChange={(e) => setCpaCible(Number(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Résultats</h3>
          <p>Marge : {marge} €</p>
          <p>
            Nombre de Leads Nécessaires par Vente : {Math.ceil(leadsParVente)}
          </p>
          <p>Valeur d'un Lead (CPA max) : {valeurLead.toFixed(2)} €</p>
          {cpaCible > 0 && (
            <p>
              Bénéfices si CPA cible atteint ({cpaCible} €) :{" "}
              {benefices > 0
                ? `${benefices.toFixed(2)} €`
                : "Aucun, CPA cible est trop élevé"}
            </p>
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Masquer les Détails" : "Afficher les Détails"}
          </button>
          {showDetails && (
            <div style={{ marginTop: "20px" }}>
              <h4>Détails des Calculs :</h4>
              <ul>
                <li>
                  <strong>Marge :</strong> La marge est calculée en soustrayant
                  le coût de production des ventes ({coutProduction} €) du
                  panier moyen des nouveaux clients ({panierMoyen} €). Cela
                  donne une marge de {marge} €.
                </li>
                <li>
                  <strong>Taux de Signature :</strong> Le taux de signature est
                  le pourcentage de prospects qui deviennent effectivement des
                  clients. Par exemple, avec un taux de {tauxSignature} %, cela
                  signifie qu'1 client est signé pour chaque{" "}
                  {Math.ceil(100 / tauxSignature)} rendez-vous.
                </li>
                <li>
                  <strong>Taux de RDV sur Demandes :</strong> Ce taux indique le
                  pourcentage de leads qui se transforment en rendez-vous. Par
                  exemple, avec un taux de {tauxRDV} %, 1 RDV est obtenu pour
                  chaque {Math.ceil(100 / tauxRDV)} leads.
                </li>
                <li>
                  <strong>Nombre de Leads Nécessaires par Vente :</strong> Ce
                  nombre est calculé en multipliant le nombre de leads
                  nécessaires pour obtenir un RDV par le nombre de RDV
                  nécessaires pour réaliser une vente. Avec les taux actuels, il
                  faut {Math.ceil(leadsParVente)} leads pour réaliser une vente.
                </li>
                <li>
                  <strong>Valeur d'un Lead :</strong> La valeur d'un lead est
                  calculée en divisant la marge par le nombre de leads
                  nécessaires pour réaliser une vente. Avec une marge de {marge}{" "}
                  € et {Math.ceil(leadsParVente)} leads nécessaires, la valeur
                  de chaque lead est de {valeurLead.toFixed(2)} €.
                </li>
                <li>
                  <strong>Bénéfices avec CPA Cible :</strong> Si vous parvenez à
                  obtenir un CPA cible inférieur au CPA max, les bénéfices
                  seront calculés en soustrayant le CPA cible de la valeur du
                  lead et en multipliant par le nombre de leads nécessaires pour
                  une vente. Par exemple, avec un CPA cible de {cpaCible} € et
                  une valeur de lead de {valeurLead.toFixed(2)} €, vos bénéfices
                  seront de{" "}
                  {benefices > 0
                    ? `${benefices.toFixed(2)} €`
                    : "Aucun, CPA cible est trop élevé"}
                  .
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LeadCalculator;
