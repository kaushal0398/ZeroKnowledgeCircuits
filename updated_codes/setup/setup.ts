import { initialize } from "zokrates-js/node";
import { setupDepositCircuit } from "./setup-deposit-circuit";
import { setupTransactionCircuit } from "./setup-transation-circuit";
import { setupUpdateCircuit } from "../circuits/setup-update-circuit";

export async function setup() {
  const provider = await initialize();

  await setupDepositCircuit({ provider });
  await setupTransactionCircuit({ provider });
  await setupUpdateCircuit({ provider });
}
