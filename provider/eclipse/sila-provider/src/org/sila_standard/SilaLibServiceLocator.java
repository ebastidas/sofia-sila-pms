/**
 * SilaLibServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public class SilaLibServiceLocator extends org.apache.axis.client.Service implements org.sila_standard.SilaLibService {

/**
 * WSDL File for infoteam silaLib version 1.3.2.1 based TestDevice
 */

    public SilaLibServiceLocator() {
    }


    public SilaLibServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public SilaLibServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for silaLibPort
    private java.lang.String silaLibPort_address = "http://localhost:8080/SiLA_Test/services/silaLibPort";

    public java.lang.String getsilaLibPortAddress() {
        return silaLibPort_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String silaLibPortWSDDServiceName = "silaLibPort";

    public java.lang.String getsilaLibPortWSDDServiceName() {
        return silaLibPortWSDDServiceName;
    }

    public void setsilaLibPortWSDDServiceName(java.lang.String name) {
        silaLibPortWSDDServiceName = name;
    }

    public org.sila_standard.SilaLibPortType getsilaLibPort() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(silaLibPort_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getsilaLibPort(endpoint);
    }

    public org.sila_standard.SilaLibPortType getsilaLibPort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            org.sila_standard.SilaLibBindingStub _stub = new org.sila_standard.SilaLibBindingStub(portAddress, this);
            _stub.setPortName(getsilaLibPortWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setsilaLibPortEndpointAddress(java.lang.String address) {
        silaLibPort_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (org.sila_standard.SilaLibPortType.class.isAssignableFrom(serviceEndpointInterface)) {
                org.sila_standard.SilaLibBindingStub _stub = new org.sila_standard.SilaLibBindingStub(new java.net.URL(silaLibPort_address), this);
                _stub.setPortName(getsilaLibPortWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("silaLibPort".equals(inputPortName)) {
            return getsilaLibPort();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://sila-standard.org", "silaLibService");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://sila-standard.org", "silaLibPort"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("silaLibPort".equals(portName)) {
            setsilaLibPortEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
