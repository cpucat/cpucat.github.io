using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class winZone : MonoBehaviour
{
    public GameObject winCanvas;
    private void OnTriggerEnter(Collider other)
    {
        Instantiate(winCanvas);
    }
}
