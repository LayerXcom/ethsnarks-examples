# ethsnarks-exmaples
Example implementations of ethsnarks(https://github.com/HarryR/ethsnarks).


## Building
```
$ git clone git@github.com:LayerXcom/ethsnarks-examples.git
$ cd ethsnarks-examples
```

You can run `ethsnarks` on Docker:
```
$ docker pull osuketh/ethsnarks:latest
$ docker run -v `pwd`:/workspace/ethsnarks-examples --rm -it osuketh/ethsnarks /bin/bash
$ cd /workspace/ethsnarks-examples
```

then, executing by `make` command and specifying a hash function algorithm and a preimage.
```
$ spec=sha256 preimage=10 make
```

You proved that you knew the preimage without revealing it, and the smart contract verified it.


## Measurements

### sha256
gas estimation: 594886


#### key generation
```
(enter) Call to r1cs_gg_ppzksnark_zok_generator	[             ]	(1544927799.6273s x0.00 from start)
  (enter) Call to r1cs_constraint_system::swap_AB_if_beneficial	[             ]	(1544927799.6437s x0.00 from start)
    (enter) Estimate densities                 	[             ]	(1544927799.6439s x0.00 from start)
      * Non-zero A-count (estimate): 31153
      * Non-zero B-count (estimate): 37665
    (leave) Estimate densities                 	[0.0028s x0.78]	(1544927799.6467s x0.00 from start)
    (enter) Perform the swap                   	[             ]	(1544927799.6467s x0.00 from start)
    (leave) Perform the swap                   	[0.0013s x0.39]	(1544927799.6481s x0.00 from start)
  (leave) Call to r1cs_constraint_system::swap_AB_if_beneficial	[0.0045s x0.63]	(1544927799.6482s x0.00 from start)
  (enter) Call to r1cs_to_qap_instance_map_with_evaluation	[             ]	(1544927799.6494s x0.00 from start)
    (enter) Compute evaluations of A, B, C, H at t	[             ]	(1544927799.6517s x0.00 from start)
    (leave) Compute evaluations of A, B, C, H at t	[0.2346s x0.98]	(1544927799.8863s x0.00 from start)
  (leave) Call to r1cs_to_qap_instance_map_with_evaluation	[0.2370s x0.98]	(1544927799.8865s x0.00 from start)
  * QAP number of variables: 51378
  * QAP pre degree: 54818
  * QAP degree: 65536
  * QAP number of input variables: 2
  (enter) Compute query densities            	[             ]	(1544927799.8871s x0.00 from start)
  (leave) Compute query densities            	[0.0006s x0.57]	(1544927799.8878s x0.00 from start)
  (enter) Compute gamma_ABC for R1CS verification key	[             ]	(1544927799.8878s x0.00 from start)
  (leave) Compute gamma_ABC for R1CS verification key	[0.0000s x0.79]	(1544927799.8879s x0.00 from start)
  (enter) Compute L query for R1CS proving key	[             ]	(1544927799.8886s x0.00 from start)
  (leave) Compute L query for R1CS proving key	[0.0186s x0.99]	(1544927799.9073s x0.00 from start)
  (enter) Generating G1 MSM window table     	[             ]	(1544927799.9074s x0.00 from start)
    Choosing window size 13 for 120198 elements
    * G1 window: 13
  (leave) Generating G1 MSM window table     	[0.2308s x0.99]	(1544927800.1382s x0.00 from start)
  (enter) Generating G2 MSM window table     	[             ]	(1544927800.1383s x0.00 from start)
    Choosing window size 12 for 31153 elements
    * G2 window: 12
  (leave) Generating G2 MSM window table     	[0.5784s x1.00]	(1544927800.7167s x0.00 from start)
  (enter) Generate R1CS proving key          	[             ]	(1544927800.7168s x0.00 from start)
    (enter) Generate queries                   	[             ]	(1544927800.7211s x0.00 from start)
      (enter) Compute the A-query                	[             ]	(1544927800.7211s x0.00 from start)
      ...... DONE!
      (leave) Compute the A-query                	[1.2366s x0.99]	(1544927801.9578s x0.00 from start)
      (enter) Compute the B-query                	[             ]	(1544927801.9578s x0.00 from start)
      Non-zero coordinate count: 31153/51379 (60.63%)
      (leave) Compute the B-query                	[5.0959s x1.00]	(1544927807.0537s x0.00 from start)
      (enter) Compute the H-query                	[             ]	(1544927807.0538s x0.00 from start)
      ....... DONE!
      (leave) Compute the H-query                	[2.0477s x0.99]	(1544927809.1015s x0.00 from start)
      (enter) Compute the L-query                	[             ]	(1544927809.1015s x0.00 from start)
      ...... DONE!
      (leave) Compute the L-query                	[1.5936s x0.98]	(1544927810.6951s x0.00 from start)
    (leave) Generate queries                   	[9.9740s x0.99]	(1544927810.6951s x0.00 from start)
  (leave) Generate R1CS proving key          	[9.9784s x0.99]	(1544927810.6952s x0.00 from start)
  (enter) Generate R1CS verification key     	[             ]	(1544927810.6955s x0.00 from start)
    (enter) Encode gamma_ABC for R1CS verification key	[             ]	(1544927810.7024s x0.00 from start)
      . DONE!
    (leave) Encode gamma_ABC for R1CS verification key	[0.0025s x0.40]	(1544927810.7049s x0.00 from start)
  (leave) Generate R1CS verification key     	[0.0095s x0.48]	(1544927810.7050s x0.00 from start)
(leave) Call to r1cs_gg_ppzksnark_zok_generator	[11.0778s x0.99]	(1544927810.7051s x0.00 from start)
* G1 elements in PK: 219670
* Non-zero G1 elements in PK: 199444
* G2 elements in PK: 51380
* Non-zero G2 elements in PK: 31154
* PK size in bits: 68709398
* G1 elements in VK: 3
* G2 elements in VK: 3
* GT elements in VK: 0
* VK size in bits: 2292
```


#### proof generation

```  Contract: TestableVerifier
(enter) Call to r1cs_gg_ppzksnark_zok_prover	[             ]	(1544927824.7402s x0.00 from start)
  (enter) Compute the polynomial H           	[             ]	(1544927824.7403s x0.00 from start)
    (enter) Call to r1cs_to_qap_witness_map    	[             ]	(1544927824.7403s x0.00 from start)
      (enter) Compute evaluation of polynomials A, B on set S	[             ]	(1544927824.7419s x0.00 from start)
      (leave) Compute evaluation of polynomials A, B on set S	[0.0368s x0.94]	(1544927824.7787s x0.00 from start)
      (enter) Compute coefficients of polynomial A	[             ]	(1544927824.7788s x0.00 from start)
      (leave) Compute coefficients of polynomial A	[0.1122s x0.99]	(1544927824.8911s x0.00 from start)
      (enter) Compute coefficients of polynomial B	[             ]	(1544927824.8912s x0.00 from start)
      (leave) Compute coefficients of polynomial B	[0.0989s x0.99]	(1544927824.9901s x0.00 from start)
      (enter) Compute ZK-patch                   	[             ]	(1544927824.9902s x0.00 from start)
      (leave) Compute ZK-patch                   	[0.0120s x0.98]	(1544927825.0022s x0.00 from start)
      (enter) Compute evaluation of polynomial A on set T	[             ]	(1544927825.0023s x0.00 from start)
      (leave) Compute evaluation of polynomial A on set T	[0.1066s x1.00]	(1544927825.1089s x0.00 from start)
      (enter) Compute evaluation of polynomial B on set T	[             ]	(1544927825.1090s x0.00 from start)
      (leave) Compute evaluation of polynomial B on set T	[0.0869s x1.00]	(1544927825.1959s x0.00 from start)
      (enter) Compute evaluation of polynomial H on set T	[             ]	(1544927825.1960s x0.00 from start)
        (enter) Compute evaluation of polynomial C on set S	[             ]	(1544927825.2014s x0.00 from start)
        (leave) Compute evaluation of polynomial C on set S	[0.0135s x0.98]	(1544927825.2149s x0.00 from start)
        (enter) Compute coefficients of polynomial C	[             ]	(1544927825.2150s x0.00 from start)
        (leave) Compute coefficients of polynomial C	[0.0827s x1.00]	(1544927825.2977s x0.00 from start)
        (enter) Compute evaluation of polynomial C on set T	[             ]	(1544927825.2978s x0.00 from start)
        (leave) Compute evaluation of polynomial C on set T	[0.1020s x1.00]	(1544927825.3998s x0.00 from start)
        (enter) Divide by Z on set T               	[             ]	(1544927825.4031s x0.00 from start)
        (leave) Divide by Z on set T               	[0.0050s x0.90]	(1544927825.4081s x0.00 from start)
      (leave) Compute evaluation of polynomial H on set T	[0.2122s x0.99]	(1544927825.4082s x0.00 from start)
      (enter) Compute coefficients of polynomial H	[             ]	(1544927825.4083s x0.00 from start)
      (leave) Compute coefficients of polynomial H	[0.0917s x0.99]	(1544927825.5000s x0.00 from start)
      (enter) Compute sum of H and ZK-patch      	[             ]	(1544927825.5004s x0.00 from start)
      (leave) Compute sum of H and ZK-patch      	[0.0011s x0.93]	(1544927825.5014s x0.00 from start)
    (leave) Call to r1cs_to_qap_witness_map    	[0.7612s x0.99]	(1544927825.5015s x0.00 from start)
  (leave) Compute the polynomial H           	[0.7616s x0.99]	(1544927825.5019s x0.00 from start)
  (enter) Compute the proof                  	[             ]	(1544927825.5021s x0.00 from start)
    (enter) Compute evaluation to A-query      	[             ]	(1544927825.5022s x0.00 from start)
    (enter) Process scalar vector              	[             ]	(1544927825.5024s x0.00 from start)
      * Elements of w skipped: 26723 (52.01%)
      * Elements of w processed with special addition: 22970 (44.71%)
      * Elements of w remaining: 1686 (3.28%)
    (leave) Process scalar vector              	[0.0199s x1.00]	(1544927825.5224s x0.00 from start)
    (leave) Compute evaluation to A-query      	[0.0421s x1.00]	(1544927825.5443s x0.00 from start)
    (enter) Compute evaluation to B-query      	[             ]	(1544927825.5444s x0.00 from start)
    (enter) Process scalar vector              	[             ]	(1544927825.5444s x0.00 from start)
      * Elements of w skipped: 16812 (53.97%)
      * Elements of w processed with special addition: 14341 (46.03%)
      * Elements of w remaining: 0 (0.00%)
    (leave) Process scalar vector              	[0.0913s x1.00]	(1544927825.6357s x0.00 from start)
    (leave) Compute evaluation to B-query      	[0.0914s x1.00]	(1544927825.6358s x0.00 from start)
    (enter) Compute evaluation to H-query      	[             ]	(1544927825.6359s x0.00 from start)
    (leave) Compute evaluation to H-query      	[1.4788s x1.00]	(1544927827.1147s x0.00 from start)
    (enter) Compute evaluation to L-query      	[             ]	(1544927827.1148s x0.00 from start)
    (enter) Process scalar vector              	[             ]	(1544927827.1149s x0.00 from start)
      * Elements of w skipped: 26723 (52.01%)
      * Elements of w processed with special addition: 22969 (44.71%)
      * Elements of w remaining: 1684 (3.28%)
    (leave) Process scalar vector              	[0.0206s x0.99]	(1544927827.1355s x0.00 from start)
    (leave) Compute evaluation to L-query      	[0.0320s x0.99]	(1544927827.1469s x0.00 from start)
  (leave) Compute the proof                  	[1.6489s x1.00]	(1544927827.1510s x0.00 from start)
(leave) Call to r1cs_gg_ppzksnark_zok_prover	[2.4109s x0.99]	(1544927827.1511s x0.00 from start)
* G1 elements in proof: 2
* G2 elements in proof: 1
* Proof size in bits: 1019
```
